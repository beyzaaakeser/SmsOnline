import Modal from '@/app/(pages)/login/modal';
import React from 'react';
import Button from '../../Button';

const WatchModal = ({ isOpen, close }) => {
  return (
    <Modal
      isOpen={isOpen}
      close={close}
      designs=" px-0 py-0 !max-w-[900px] !bg-transparent shadow-none  "
      hideClose={true}
    >
      <div className="w-full h-[225px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-xl bg-transparent ">
        <iframe
          className="w-full h-[225px] sm:h-[400px] lg:min-h-[505px] "
          src="https://www.youtube.com/embed/4El2sdruXhY?autoplay=1&si=e0QDER_cPutnDOqW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button title={'Try Now'} href={"/app"} />
      </div>
    </Modal>
  );
};

export default WatchModal;
