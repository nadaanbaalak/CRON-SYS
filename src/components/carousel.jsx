import React, { Component, Fragment } from "react";
import Carousel from "react-elastic-carousel";
import ReactPlayer from "react-player";
import Modal from "react-modal";

class CarouselC extends Component {
  state = {
    data: [
      {
        id: 1,
        posterUrl: "https://bit.ly/2WEEWm5",
        videoUrl: "https://bit.ly/2LfPXFi",
        isPoster: true,
        toBePlayed: false,
        videoControls: false,
      },
      {
        id: 2,
        posterUrl: "https://bit.ly/2SQNp4y ",
        videoUrl: "https://bit.ly/2WhcU0N",
        isPoster: true,
        toBePlayed: false,
        videoControls: false,
      },
      {
        id: 3,
        posterUrl: "https://bit.ly/2WAM56U",
        videoUrl: "https://bit.ly/2WKzJci",
        isPoster: true,
        toBePlayed: false,
        videoControls: false,
      },
      {
        id: 4,
        posterUrl: "https://bit.ly/3ftfpVD",
        videoUrl: "https://bit.ly/2WimPDF ",
        isPoster: true,
        toBePlayed: false,
        videoControls: false,
      },
      {
        id: 5,
        posterUrl: "https://bit.ly/2yKaOhd",
        videoUrl: "https://bit.ly/2Wg0ZAo",
        isPoster: true,
        toBePlayed: false,
        videoControls: false,
      },
      {
        id: 6,
        posterUrl: "https://bit.ly/2YU4iPL",
        videoUrl: "https://bit.ly/2WJ7fzB",
        isPoster: true,
        toBePlayed: false,
        videoControls: false,
      },
    ],
    visibleSlides: 4,
    volume: 0.6,
    modalIsOpen: false,
  };

  handleMouseEnter = (id) => {
    let data = [...this.state.data];
    data[id - 1].isPoster = false;
    data[id - 1].toBePlayed = true;
    this.setState({ data });
  };

  handleMouseLeave = (id) => {
    let data = [...this.state.data];
    data[id - 1].isPoster = true;
    data[id - 1].toBePlayed = false;
    this.setState({ data });
  };

  handleClick = (id) => {
    let data = [...this.state.data];
    data[id - 1].isPoster = true;
    data[id - 1].toBePlayed = false;
    data[id - 1].videoControls = true;
    this.setState({ data, modalIsOpen: true });
  };

  closeModal = (id) => {
    let data = [...this.state.data];
    data[id - 1].isPoster = true;
    data[id - 1].toBePlayed = false;
    data[id - 1].videoControls = false;
    this.setState({ modalIsOpen: false, data });
  };

  render() {
    const { visibleSlides, data, volume, modalIsOpen } = this.state;
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    return (
      <div className="container-fluid m-4">
        <Carousel itemsToShow={visibleSlides} className="">
          {data.map((d) => (
            <div
              key={d.id}
              onMouseEnter={() => this.handleMouseEnter(d.id)}
              onMouseLeave={() => this.handleMouseLeave(d.id)}
              onClick={() => this.handleClick(d.id)}
            >
              {d.isPoster ? (
                <img src={d.posterUrl} height="400" width="600" alt="poster" />
              ) : (
                <Fragment>
                  <ReactPlayer
                    url={d.videoUrl}
                    playing={d.toBePlayed}
                    volume={volume}
                    controls={d.videoControls}
                  />

                  <Modal isOpen={modalIsOpen} style={customStyles}>
                    <ReactPlayer
                      url={d.videoUrl}
                      playing={d.toBePlayed}
                      volume={volume}
                      controls={d.videoControls}
                    />
                    <button
                      className="primary"
                      onClick={() => this.closeModal(d.id)}
                    >
                      Close
                    </button>
                  </Modal>
                </Fragment>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default CarouselC;
// onRequestClose={() => this.closeModal(d.id)}
