export const fetchData = async (path: string, id?: string) => {
  try {
    const url = `${process.env.REACT_APP_API_BASEURL}/api/${path}/${id || ""}`;
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
