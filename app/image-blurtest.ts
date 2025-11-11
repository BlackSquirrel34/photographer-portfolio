import lqip from "lqip-modern";
import fetch from "node-fetch";

const imgUrl =
  "/Users/Edith_1/Documents/Profession/freelance-Coder/photography-portfolio/app/public/ivan-bandura-2FEE6BR343k-unsplash.jpg";

const imgUrl2 =
  "https://images.unsplash.com/photo-1524275804141-5e9f2bc5a71d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740";

async function getDataUrl(url: string) {
  const imgData = await fetch(url);

  const arrayBufferData = await imgData.arrayBuffer();
  const lqipData = await lqip(Buffer.from(arrayBufferData));

  return lqipData.metadata.dataURIBase64;
}

getDataUrl(imgUrl2).then(console.log);
// getDataUrl(imgUrl2);
