export const fetchData = async (
  path: string,
  query?: { [key: string]: string }
) => {
  try {
    const queryString = query
      ? Object.entries(query)
          .map(([key, value]) => `${value}`)
          .join("&")
      : "";
    const url = `${process.env.API_BASE_URL}/api/${path}/${
      queryString ? `${queryString}` : ""
    }`;
    console.log(url);
    const res = await fetch(url, {
      next: {
        revalidate: 30
      }
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
