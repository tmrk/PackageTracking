const Map = ({lat, long, width = 168, height = 380}) => {

  const bingBasicKey = "AhigxzE7Dngd184QTIo-A1z0JDbKGuDfWMsY6yAzbCODFw_xtv0WULWqMBN47U9-";
  const coords = [lat,long].join(",");
  const size = [width, height].join(",");
  const iconStyle = "91"; // Styles: https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/pushpin-syntax-and-icon-styles
  const bingMapSrc = "https://dev.virtualearth.net/REST/v1/Imagery/Map/CanvasLight?format=png&pushpin="
    + coords + ";"
    + iconStyle + "&mapSize="
    + size + "&key="
    + bingBasicKey;

  return (<img src={bingMapSrc} alt="Map" />);

}

export default Map;
