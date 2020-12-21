const aws = require("aws-sdk");
const stream = require("stream");
const fs = require("fs");

const configureAWS = () => {
  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
  });
};

const uploadStream = ({ Bucket, Key }) => {
  const s3 = new aws.S3();
  const pass = new stream.PassThrough();

  return {
    writeStream: pass,
    uploadPromise: s3.upload({ Bucket, Key, Body: pass }).promise(),
  };
};

const awsFileUpload = (file, name) => {
  configureAWS();

  const { writeStream, uploadPromise } = uploadStream({ Bucket: process.env.BUCKET, Key: name });
  const readStream = fs.createReadStream(file.path);
  const pipeline = readStream.pipe(writeStream);

  return new Promise((resolve, reject) => {
    uploadPromise
      .then(() => {
        resolve("uploaded to s3 successfully");
      })
      .catch((error) => {
        reject(`s3 upload failed: ${error.message}`);
      });
  });
};

const awsGetFileUrl = (amazonName, fileName) => {
  const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
  });

  return new Promise((resolve, reject) => {
    const url = s3.getSignedUrl("getObject", {
      Bucket: process.env.BUCKET,
      Key: amazonName,
      ResponseContentDisposition: `attachment; filename="${fileName}"`,
    });

    resolve(url);
  });
};

module.exports = { awsFileUpload, awsGetFileUrl };
