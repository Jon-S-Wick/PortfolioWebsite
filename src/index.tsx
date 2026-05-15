import { serve, file as bunFile } from "bun";
import { readdirSync } from "fs";
import index from "./index.html";

const publicDir = `${import.meta.dir}/../public`;

const server = serve({
  routes: {
    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },

    "/api/images/:section": async req => {
      const section = req.params.section;
      const dir = `${publicDir}/images/${section}`;

      let files: string[];
      try {
        files = readdirSync(dir).filter((f) =>
          /\.(png|jpg|jpeg|webp|gif|avif)$/i.test(f)
        );
      } catch {
        files = [];
      }

      const images = files.map((f) => ({
        original: `/images/${section}/${f}`,
        thumbnail: `/images/${section}/${f}`,
      }));

      return Response.json(images, {
        headers: { "Content-Type": "application/json" },
      });
    },

    "/images/:section/:file": async req => {
      const { section, file } = req.params;
      const imageFile = bunFile(`${publicDir}/images/${section}/${file}`);
      if (await imageFile.exists()) {
        return new Response(imageFile);
      }
      return new Response("Not found", { status: 404 });
    },

    // Serve index.html for all unmatched routes (SPA fallback).
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
