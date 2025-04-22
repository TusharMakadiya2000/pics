function ImageShow({ image }) {
    return (
        <div>
            <img
                className="w-[100%] mb-2.5"
                src={image.urls.small}
                alt={image.alt_description}
            />
        </div>
    );
}

export default ImageShow;
