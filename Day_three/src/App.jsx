import { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);

    fetch(`http://localhost:3000/product?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "30px" }}>
        ✨ Premium Product Store
      </h1>

      {loading && (
        <h2 style={{ color: "white" }}>⏳ Loading Products...</h2>
      )}

      {/* Product Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          opacity: loading ? 0.5 : 1,
          transition: "0.5s ease",
        }}
      >
        {product.map((el) => (
          <div
            key={el.id}
            style={{
              width: "220px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "20px",
              color: "white",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={el.image}
              alt=""
              style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h4>{el.title.slice(0, 20)}...</h4>
            <p>₹ {el.price}</p>
            <p>
              ⭐ {el.rating?.rate} ({el.rating?.count})
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: "40px" }}>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          style={buttonStyle}
        >
          Prev
        </button>

        <span
          style={{
            margin: "0 20px",
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {page}
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= 4}
          style={buttonStyle}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "25px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
};

export default App;
