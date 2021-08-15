/* eslint-disable jsx-a11y/anchor-is-valid */
export const Card = ({ title }) => {
  return (
    <>
      <div className="card">
        <div>
          <a onClick={() => window.alert("This is a button! 🦋  ")}>
            <img src="/assets/baixar.png" alt="" />
          </a>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};
