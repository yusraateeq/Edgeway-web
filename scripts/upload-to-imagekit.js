/**
 * Upload all images from public/ to ImageKit
 * Run: node scripts/upload-to-imagekit.js
 */

const ImageKit = require("imagekit");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// ImageKit client
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
});

// Files to upload (relative to public/)
const FILES_TO_UPLOAD = [
  "logo-mark.jpg",
  "favicon.jpg",
  "images/security-team-patrol.jpg",
  "images/camera-installation.jpg",
  "images/patrol-vehicle.jpg",
  "images/security-patch.jpg",
  // New images
  "images/AdobeStock_926070665.jpeg",
  "images/AdobeStock_717094244.jpeg",
  "images/AdobeStock_316323272.jpeg",
];

async function uploadFile(filePath, fileName) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(__dirname, "../public", filePath);
    const fileBuffer = fs.readFileSync(fullPath);
    const base64File = fileBuffer.toString("base64");

    imagekit.upload(
      {
        file: base64File,
        fileName: fileName,
        folder: path.dirname(filePath) === "." ? "/" : `/${path.dirname(filePath)}`,
        useUniqueFileName: false,
        overwriteFile: true,
        isPublished: true,
      },
      (error, result) => {
        if (error) {
          console.error(`❌ Failed: ${filePath}`, error.message);
          reject(error);
        } else {
          console.log(`✅ Uploaded: ${filePath} → ${result.url}`);
          resolve(result);
        }
      }
    );
  });
}

async function main() {
  console.log("🚀 Starting ImageKit upload...\n");
  console.log(`📁 Uploading to: ${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}\n`);

  let success = 0;
  let failed = 0;

  for (const file of FILES_TO_UPLOAD) {
    try {
      await uploadFile(file, path.basename(file));
      success++;
    } catch (err) {
      failed++;
    }
  }

  console.log(`\n📊 Done! ✅ ${success} uploaded, ❌ ${failed} failed`);
  
  if (success > 0) {
    console.log("\n🎉 Images are now live on ImageKit CDN!");
    console.log("🔄 Restart dev server: npm run dev");
  }
}

main().catch(console.error);