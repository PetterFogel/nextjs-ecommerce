export const fetchData = async (path: string, id?: string) => {
  try {
    const url = `${process.env.API_BASE_URL}/api/${path}/${id || ""}`;
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
