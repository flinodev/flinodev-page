import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getBlogPosts, getProjects } from "@i18n/utils";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const posts = await getBlogPosts("en");
  const projects = await getProjects("en");

  const items = [...posts, ...projects];

  items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: SITE.TITLE,
    description: "Official website of Francisco Suriel Lino, software developer, freelancer and teacher",
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.collection === "blog" ? `/en/blog/${item.slug}/` : `/en/projects/${item.slug}/`,
    })),
  });
}
