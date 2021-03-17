export const getCount = async (): Promise<number> => {
  const res = await fetch("https://counts.yourssu.com/counts", {
    mode: "cors",
  });
  const data = await res.json();
  return data.count;
};

export const incrementCount = async (): Promise<void> => {
  try {
    await fetch("https://counts.yourssu.com/counts", {
      method: "post",
      mode: "cors",
    });
  } catch (err) {
    console.log(err);
  }
};
