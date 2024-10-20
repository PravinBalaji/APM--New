import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [orderCancelled, setOrderCancelled] = useState(false);

  useEffect(() => {
    if (activeTab !== "dashboard" || orderCancelled) {
      fetchOrders(activeTab);
      setOrderCancelled(false); // Reset the flag after fetching
    }
  }, [activeTab, orderCancelled]);

  const fetchOrders = async (status) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://www.annapoornamithai.com/admin/manage-orders",
        {
          deliveryStatus: status,
        }
      );
      console.log(response);
      setOrders(
        Array.isArray(response.data.result) ? response.data.result : []
      );
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  const changeStatus = async (orderId, newStatus) => {
    setIsLoading(true);
    try {
      await axios.patch(
        "https://www.annapoornamithai.com/admin/manage-orders",
        {
          order_id: orderId,
          delivery_status: newStatus,
        }
      );
      await fetchOrders(activeTab);
    } catch (error) {
      console.error("Error changing order status:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleCancelOrder = async (order_id) => {
    try {
      const response = await axios.patch(
        "https://www.annapoornamithai.com/admin/cancel-order",
        {
          order_id: order_id,
        }
      );
      alert("Order Cancelled");
      setOrderCancelled(true); // Set the flag to trigger useEffect
    } catch (err) {
      console.log(err);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    const options = { 
      year: "numeric", 
      month: "long", 
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };
    
    return date.toLocaleString("en-US", options);
  };

  // In your component:

  const OrderCard = ({ order }) => (
    <div className="flex flex-col lg:flex-row justify-between bg-white shadow-md rounded-lg p-4 mb-4 w-full">
      <div className="lg:w-3/4">
        <h3 className="font-bold">Order ID: {order.order_id} </h3>
        <h3 className="font-bold">
          {order.preorder_date == null ? (
            <> </>
          ) : (
            <p className="text-green-400">{formatDate(order.preorder_date)}</p>
          )}
        </h3>
        <p>Customer: {order.name}</p>
        <p>Mobile: {order.mobile}</p>
        <p>Address: {order.address}</p>
        <p>Total: ₹{order.total_price}</p>
        <p>Payment: {order.payment_status}</p>
        {/* <p>
        
          {activeTab.toUpperCase()} DATE:{" "}
          {order[`${activeTab}_date`]
            ? formatDate(order[`${activeTab}_date`])
            : "N/A"}
        </p> */}

        {order.received_date && <p>Received Date: {formatDate(order.received_date)}</p>}
      {order.processing_date && <p>Processing Date: {formatDate(order.processing_date)}</p>}
      {order.shipped_date && <p>Shipped Date: {formatDate(order.shipped_date)}</p>}
      {order.delivered_date && <p>Delivered Date: {formatDate(order.delivered_date)}</p>}
      {order.cancelled_date && <p>Cancelled Date: {formatDate(order.cancelled_date)}</p>}

        <div className="mt-4">
          <h4 className="font-semibold">Order Items:</h4>
          {order.order_items && order.order_items.length > 0 ? (
            <ul className="list-disc pl-5">
              {order.order_items.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.weight || "N/A"} - Qty:{" "}
                  {item.quantity || 1}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items</p>
          )}
        </div>
        {activeTab!="cancelled"? <button
          className="w-full md:w-1/2 bg-red-500 text-white mt-2 rounded-lg px-4 py-2"
          onClick={() => {
            handleCancelOrder(order.order_id);
          }}
        >
          Cancel
        </button>: <></>}
        
      </div>
     <div className="mt-4 lg:mt-0 lg:w-1/4 bg-red">
     
       {activeTab!= 'cancelled' ? <> <select
          value={activeTab} // Use activeTab as the value
          onChange={(e) => changeStatus(order.order_id, e.target.value)}
          className={`border rounded p-2 w-full lg:w-[120px] status-${activeTab}`}
        >
          <option value="received">Received</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select></> : <></>}
      </div>
      
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Hamburger menu for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 transition duration-200 ease-in-out lg:block w-64 bg-white shadow-md z-40`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 mt-8 lg:mt-0">
            Admin Dashboard
          </h2>
          <ul>
            {[
              "dashboard",
              "received",
              "processing",
              "shipped",
              "delivered",
              "cancelled",
            ].map((tab) => (
              <li key={tab} className="mb-2">
                <button
                  onClick={() => {
                    setActiveTab(tab);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 lg:p-8">
        <h1 className="text-2xl font-bold mb-4 mt-6 lg:mt-0">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Orders
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        ) : activeTab === "dashboard" ? (
          <p>
            Welcome to the admin dashboard. Select a category to view orders.
          </p>
        ) : orders.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {orders.map((order) => (
              <OrderCard key={order.order_id} order={order} />
            ))}
          </div>
        ) : (
          <p>No orders found for this status.</p>
        )}
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Admin;
