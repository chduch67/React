function App() {
  let desc = "";
  const loginYn = "Y";
  if (loginYn === "Y") {
    desc = <div>GodDaeHee 입니다.</div>;
  } else {
    desc = <div>비회원 입니다.</div>;
  }
  return <>{desc}</>;
}
function App() {
  const loginYn = "Y";
  return (
    <>
      <div>
        {loginYn === "Y" ? (
          <div>GodDaeHee 입니다.</div>
        ) : (
          <div>비회원 입니다.</div>
        )}
      </div>
    </>
  );
}

function App() {
  const loginYn = "Y";
  return (
    <>
      <div>{loginYn === "Y" && <div>GodDaeHee 입니다.</div>}</div>
    </>
  );
}

function App() {
  const loginYn = "Y";
  return (
    <>
      {(() => {
        if (loginYn === "Y") {
          return <div>GodDaeHee 입니다.</div>;
        } else {
          return <div>비회원 입니다.</div>;
        }
      })()}
    </>
  );
}
