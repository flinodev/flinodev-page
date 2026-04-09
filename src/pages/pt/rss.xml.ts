import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getBlogPosts, getProjects } from "@i18n/utils";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const posts = await getBlogPosts("pt");
  const projects = await getProjects("pt");

  const items = [...posts, ...projects];

  items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: SITE.TITLE,
    description: "Site oficial de Francisco Suriel Lino, desenvolvedor de software, freelancer e professor",
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.collection === "blog" ? `/pt/blog/${item.slug}/` : `/pt/projects/${item.slug}/`,
    })),
  });
}
