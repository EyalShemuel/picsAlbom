import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as useParams } from "react-router-dom";

import { imageSelectors } from "../../Store/ImageSlice";
import Card from "./Card";

const AlbumPage = ({title,src,description}) => {
    let { userID } = useParams();
    const allImages = useSelector(imageSelectors.selectEntities);
  return (
    <div>
      <Card title={title} src={src} description={description} />
    </div>
  );
};

export default AlbumPage;
