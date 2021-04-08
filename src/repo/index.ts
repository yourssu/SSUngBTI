export const getCount = async (): Promise<number> => {
  if (process.env.NODE_ENV === "production") {
    const res = await fetch("https://counts.yourssu.com/counts", {
      mode: "cors",
    });
    const data = await res.json();
    return data.count;
  } else {
    return 1000;
  }
};

export const incrementCount = async (): Promise<void> => {
  try {
    if (process.env.NODE_ENV === "production") {
      await fetch("https://counts.yourssu.com/counts", {
        method: "post",
        mode: "cors",
      });
    }
  } catch (err) {
    console.error(err);
  }
};
