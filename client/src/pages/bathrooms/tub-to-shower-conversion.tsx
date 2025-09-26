import { useQuery, gql } from "@apollo/client";

const GET_SUBPAGE_CONTENT = gql`
  query GetSubpageContent($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

const TubToShowerConversion = () => {
  const { loading, error, data } = useQuery(GET_SUBPAGE_CONTENT, {
    variables: { uri: "bathrooms/tub-to-shower-conversion" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, content, featuredImage } = data.pageBy;

  return (
    <div>
      <h1>{title}</h1>
      {featuredImage && <img src={featuredImage.node.sourceUrl} alt={title} />}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default TubToShowerConversion;