import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css"; // Import the CSS for styling (optional)
import Gallery from 'react-image-gallery';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import ReactPlayer from 'react-player';

const GallerySingle = () => {
    const images = [
        {
            original: 'https://picsum.photos/300',
            thumbnail: 'https://picsum.photos/300',
            description: 'Image 1',
        },
        {
            original: 'https://picsum.photos/300',
            thumbnail: 'https://picsum.photos/300',
            description: 'Image 2',
        },
        {
            original: 'https://picsum.photos/100',
            thumbnail: 'https://picsum.photos/100',
            description: 'Image 3',
        },
        {
            original: 'https://picsum.photos/100',
            thumbnail: 'https://picsum.photos/100',
            description: 'Image 4',
        },
        {
            original: '//vjs.zencdn.net/v/oceans.mp4', // Video URL
            description: 'Video 1',
            controls: 'false',
            thumbnail: 'https://picsum.photos/100',
            renderItem: ({ original }) => (
                <ReactPlayer url={original} controls={true} width="70%" height="auto" />
            ),
        },
        // Add more images as needed
    ];

    return (
        <div className='cards_wrap'>
            <Breadcrumbs />
            <Gallery
                items={images}
            />
        </div>
    )
}

export default GallerySingle