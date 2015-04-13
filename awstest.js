var AWS = require('aws-sdk');

var s3 = new AWS.S3({
  params: {
    Bucket: 'testdrivendudestore'
  }
});
s3.putObject(function (err) {
  if (err) {
    console.log("Error:", err);
  } else {
    s3.upload({
      Body: 'Hello!'
    }, function () {
      console.log("Successfully uploaded data to myBucket/myKey");
    });
  }
});