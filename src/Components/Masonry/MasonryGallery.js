import { useEffect, useState } from 'react';
import { RenderItem } from './RenderItem';
import './Masonary.css';
import { ItemCard } from './ItemCard';

export const MasonryGallery = ({ SearchedData, loader, setLoader }) => {
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState({ showModal: false, data: {} });

  const fetchImages = () => {
    fetch(
      'https://api.unsplash.com/photos?page=5&client_id=gjT9-O_3jyduVX922hmqeteCSK4XCoFVdrpuTUtu_LI'
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const items =
    SearchedData.data.length > 0
      ? SearchedData.data.map((item) => {
          return <RenderItem item={item} key={item.id} setModal={setModal} />;
        })
      : images.map((item) => {
          return <RenderItem item={item} key={item.id} setModal={setModal} />;
        });
  return (
    <>
      <div style={loader ? { display: 'none' } : null} className="masonry">
        {items}
      </div>
      {modal.showModal && (
        <div className="modal">
          <ItemCard data={modal.data} setModal={setModal} />
        </div>
      )}
    </>
  );
};
