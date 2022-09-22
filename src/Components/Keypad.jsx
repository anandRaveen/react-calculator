const Keypad = (props) => {
  const keys_left = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "C"
  ];

  const keys_right = [
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "×", value: "*" },
    { label: "÷", value: "/" }
  ];
  return (
    <>
      <div class="d-flex">
        <div class="d-flex flex-wrap w-100  ">
          {keys_left.map((k, index) => (
            <button
              key={index}
              className="btn_key_left"
              value={k}
              onClick={() => props.handlekeyPress(k, k)}
            >
              {k}
            </button>
          ))}
        </div>
        <div class="flex-shrink-1 ">
          {keys_right.map((k, index) => (
            <button
              key={index}
              className="btn_key_right"
              value={k.value}
              onClick={() => props.handlekeyPress(k.label, k.value)}
            >
              {k.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Keypad;
