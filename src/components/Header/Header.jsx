import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const logoLink =
    "https://cdn.suppliedshop.com/products/10217059844_1512132236.jpg";

  return (
    <div className="navbar">
      <div className="flex">
        <img
          className="logo"
          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNhMWEyYTMiPjxwYXRoIGQ9Ik0xNy4yLDQwLjEzMzMzYy0yLjA2NzY1LC0wLjAyOTI0IC0zLjk5MDg3LDEuMDU3MDkgLTUuMDMzMjIsMi44NDNjLTEuMDQyMzYsMS43ODU5MiAtMS4wNDIzNiwzLjk5NDc0IDAsNS43ODA2NmMxLjA0MjM2LDEuNzg1OTIgMi45NjU1OCwyLjg3MjI1IDUuMDMzMjIsMi44NDNoMTM3LjZjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzek0xNy4yLDgwLjI2NjY3Yy0yLjA2NzY1LC0wLjAyOTI0IC0zLjk5MDg3LDEuMDU3MDkgLTUuMDMzMjIsMi44NDNjLTEuMDQyMzYsMS43ODU5MiAtMS4wNDIzNiwzLjk5NDc0IDAsNS43ODA2NmMxLjA0MjM2LDEuNzg1OTIgMi45NjU1OCwyLjg3MjI1IDUuMDMzMjIsMi44NDNoMTM3LjZjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzek0xNy4yLDEyMC40Yy0yLjA2NzY1LC0wLjAyOTI0IC0zLjk5MDg3LDEuMDU3MDkgLTUuMDMzMjIsMi44NDNjLTEuMDQyMzYsMS43ODU5MiAtMS4wNDIzNiwzLjk5NDc0IDAsNS43ODA2NmMxLjA0MjM2LDEuNzg1OTIgMi45NjU1OCwyLjg3MjI1IDUuMDMzMjIsMi44NDNoMTM3LjZjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
        />
        <img className="dislogo" src={logoLink} />
        <Link to="../">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
      <div className="flex f1">
        <form id="searchform">
          <input
            id="searchinput"
            type="text"
            placeholder="Search for a wine, winery etc."
          />
        </form>
        <button>Sign In</button>
      </div>
    </div>
  );
};
