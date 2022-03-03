import React, { useState } from 'react'
// import firebase from "firebase/compat/app";
import { storage } from '../firebase';
import { Box, LinearProgress, Link, Typography } from '@mui/material';

const SendImage = () => {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(100);

  const handleImage = (event) => {
    const image = event.target.files[0];
    setImage(image);
    console.log(image);
    setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (image === "") {
      console.log("ファイルが選択されていません");
      setError("ファイルが選択されていません");
      return;
    }
    // アップロード処理
    console.log("アップロード処理");
    const storageRef = storage.ref("images/shopImage/"); //どのフォルダの配下に入れるかを設定
    const imagesRef = storageRef.child(image.name); //ファイル名

    console.log("ファイルをアップする行為");
    const upLoadTask = imagesRef.put(image);
    console.log("タスク実行前");

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
        setProgress(percent);
      },
      (error) => {
        console.log("err", error);
        setError("ファイルアップに失敗しました。" + error);
        setProgress(100); //実行中のバーを消す
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
            setImageUrl(downloadURL);
            console.log(setImageUrl);
        });
      }
    );
  };

  return (
    <div>
      upload
      {error && <div variant="danger">{error}</div>}
      <form onSubmit={onSubmit}>
        <input type="file" onChange={handleImage} />
        <button onClick={onSubmit}>Upload</button>
      </form>
      {progress !== 100 && <LinearProgressWithLabel value={progress} />}
      {imageUrl && (
        <div>
          <img width="400px" src={imageUrl} alt="uploaded" />
        </div>
      )}
    </div>
  );
};

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default SendImage

