import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../lib/sanityClient";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          body,
          mainImage,
          author->{ name },
          publishedAt
        }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-500 text-lg">
        Loading post...
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(900).url()}
          alt={post.title}
          className="w-full h-80 object-cover rounded-xl mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-3 text-gray-900">{post.title}</h1>
      <p className="text-gray-500 mb-10">
        by {post.author?.name || "Unknown"} ·{" "}
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* Render the rich text using the new PortableText */}
      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
};

export default BlogPost;
