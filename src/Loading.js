const Loading = ({loadingDone}) => {

  return (
    <div id="loading" className={loadingDone ? "hidden" : ""}>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );

}

export default Loading;
