import React from 'react'
import './GalerieFotoVideo.scss'
import { Parallax } from 'react-parallax';
import paralax from '../../Images/Carousel/3.jpeg'
import ImgsViewer from 'react-images-viewer'
import ReactPlayer from 'react-player'
import Masonry from "react-masonry-css";

import img7 from '../../Images/GalerieFoto/7.jpeg'
import img8 from '../../Images/GalerieFoto/8.jpeg'
import img9 from '../../Images/GalerieFoto/9.jpeg'
import img10 from '../../Images/GalerieFoto/10.jpeg'
import img11 from '../../Images/GalerieFoto/11.jpeg'
import img12 from '../../Images/GalerieFoto/12.jpeg'
import img13 from '../../Images/GalerieFoto/13.jpeg'
import img14 from '../../Images/GalerieFoto/14.jpeg'
import img15 from '../../Images/GalerieFoto/15.jpeg'
import img16 from '../../Images/GalerieFoto/16.jpeg'
import img18 from '../../Images/GalerieFoto/18.jpeg'
import img19 from '../../Images/GalerieFoto/19.jpeg'
import img20 from '../../Images/GalerieFoto/20.jpeg'
import img22 from '../../Images/GalerieFoto/22.jpeg'
import img23 from '../../Images/GalerieFoto/23.jpeg'
import img24 from '../../Images/GalerieFoto/24.jpeg'
import img25 from '../../Images/GalerieFoto/25.jpeg'
import img26 from '../../Images/GalerieFoto/26.jpeg'
import img27 from '../../Images/GalerieFoto/27.jpeg'
import img28 from '../../Images/GalerieFoto/28.jpeg'


export default class GalerieFotoVideo extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {src: img7},
                {src: img8},
                {src: img9},
                {src: img10},
                {src: img11},
                {src: img12},
                {src: img13},
                {src: img14},
                {src: img15},
                {src: img16},
                {src: img18},
                {src: img19},
                {src: img20},
                {src: img22},
                {src: img23},
                {src: img24},
                {src: img25},
                {src: img26},
                {src: img27},
                {src: img28},
            ],
            currentImage: 0,
            viewerIsOpen: false,

        }
    }

    gotoPrevious = () => {
        this.setState({currentImage: this.state.currentImage - 1})
    }

    gotoNext = () => {
        this.setState({currentImage: this.state.currentImage + 1})
    }

    closeViewer = () => {
        this.setState({viewerIsOpen: false})
    }

    openViewer = (currentPhoto) => {
        this.setState({viewerIsOpen: true, currentImage: currentPhoto})
    }

    clickThumbnail = (clickedPhoto) => {
        this.setState({currentImage: clickedPhoto})
    }

    render() {
        const breakpointColumnsObj = {
            default: 4,
            1024: 4,
            700: 3,
            500: 2,
        };

        return(
            <div className={'GalerieFotoVideo'}>
                <Parallax bgImage={paralax} bgImageAlt="cluj arena parallax" strength={200} />
                <h1>Galerie Foto</h1>
                <div className={'imagesContainer'}>
                    {this.state.images.map((el, index) => {
                        return (
                            <img key={index} className={'images'}
                                 src={el.src} alt={'galeriePhoto'}
                                onClick={() => this.openViewer(index)}
                            />
                        )
                    })}
                </div>
                {
                    window.innerWidth < 1024 &&
                    <div className={'images-masonry'}>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {this.state.images.map((el, index) => {
                                return (
                                    <img key={index} className={'images'}
                                         src={el.src} alt={'galeriePhoto'}
                                         onClick={() => this.openViewer(index)}
                                    />
                                )
                            })}
                        </Masonry>
                    </div>
                }
                <h1>Galerie Video</h1>
                <div className={'videoContainer'}>
                    <div>
                        <ReactPlayer url='vid1.mp4'
                                     height='244px'
                                     width='325px'
                                    controls='true'
                        />
                        <p>Cluj Arena Evenimente</p>
                    </div>
                    <div>
                        <ReactPlayer url='vid2.mp4'
                                 height='244px'
                                 width='325px'
                                 controls='true'
                        />
                        <p>sursa: Hola Media Prezentare Cluj Arena</p>
                    </div>
                    <div>
                        <ReactPlayer url='vid3.mp4'
                                     height='244px'
                                     width='325px'
                                 controls='true'
                        />
                        <p>sursa: FRF TV Deșteptă-te române!</p>
                    </div>
                </div>

                <ImgsViewer
                    imgs={this.state.images}
                    currImg={this.state.currentImage}
                    isOpen={this.state.viewerIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeViewer}
                    showThumbnails={true}
                    onClickThumbnail={this.clickThumbnail}
                />
            </div>
        )
    }
}