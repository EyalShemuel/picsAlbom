import React from "react";
// eslint-disable-next-line
import { useSelector, useDispatch } from "react-redux";

import { imageSelectors } from "../../Store/ImageSlice";
import Card from "./Card";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link,useParams } from 'react-router-dom';

const AlbumPage = ({title,src,description,setCurrentUser}) => {
    let { userID } = useParams();
    setCurrentUser(userID);
    
    // eslint-disable-next-line
    const allImages = useSelector(imageSelectors.selectEntities);

let imagesList=[];
for (const id in allImages) {
  if (Object.hasOwnProperty.call(allImages, id)) {
    const image = allImages[id];
    
    if (image.userID === userID){
       imagesList.push(
      <Card
      description={image.description}
       
        title={image.title}
       
        src={image.userPic}
      />
    );
    }
  
  }
}

  return (
    <div>
      {imagesList}
      {/* <Card title={title} src={src} description={description} /> */}
    </div>
  );
};

export default AlbumPage;
