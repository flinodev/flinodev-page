import { ImageResponse } from "@vercel/og";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as any;
  const { title, date } = post.data;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        },
        children: [
          // Header
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "20px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#0f172a",
                    },
                    children: "FL",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: "white",
                          },
                          children: "{flino|dev}",
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            fontSize: "20px",
                            color: "#94a3b8",
                          },
                          children: formattedDate,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          // Title
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    style: {
                      fontSize: title.length > 50 ? "64px" : "80px",
                      fontWeight: "bold",
                      color: "white",
                      lineHeight: 1.2,
                      margin: 0,
                      maxWidth: "1000px",
                    },
                    children: title,
                  },
                },
              ],
            },
          },
          // Footer
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "30px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "24px",
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "40px",
                            height: "4px",
                            background: "#3b82f6",
                            borderRadius: "2px",
                          },
                          children: "",
                        },
                      },
                      "Full Stack Developer • Security",
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    }
  );
};
