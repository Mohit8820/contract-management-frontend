const steps = ["CREATED", "APPROVED", "SENT", "SIGNED", "LOCKED"];

export const StatusTimeline = ({ current }: { current: string }) => {
  const index = steps.indexOf(current);

  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
      {steps.map((s, i) => (
        <div key={s} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background:
                i < index ? "green" : i === index ? "blue" : "lightgray",
              color: "white",
              lineHeight: "30px",
            }}
          >
            {s[0]}
          </div>
          <small>{s}</small>
        </div>
      ))}
    </div>
  );
};
