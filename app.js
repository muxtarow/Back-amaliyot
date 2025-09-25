const express = require("express");
const dotenv = require("dotenv");
const setupSwagger = require("./swagger/swagger");
const cors = require("cors");
const { sequelize } = require("./models");
const venueTypeRoutes = require("./routes/venue.type.Routes");
const RegionRoutes = require("./routes/region.Routes");
const LangRoutes = require("./routes/lenguage.Routes");
const DistrictRoutes = require("./routes/district.Routes");
const venueRoutes = require("./routes/venueRoutes");
const Venue_VenueRoutes = require("./routes/venue.venueType.Routes");
const AdminRoutes = require("./routes/Admin.Routes");
const SeatRoutes = require("./routes//Seat.Routes");
const SeatTypeRoutes = require("./routes/Seat.Type.Routes");
const venuePhoto = require("./routes/VenuePhotoRoutes");
const SectorRoutes = require("./routes/Sector.Routes");
const BookingRoutes = require("./routes/Booking.routes");
const CartRoutes = require("./routes/Cart.Routes");
const CartItemRoutes = require("./routes/CartItem.routes");
const EventRoutes = require("./routes/Event.routes");
const CountryRoutes = require("./routes/Country.routes");
const CustomerRoutes = require("./routes/Customer.routes");
const CustomerAddressRoutes = require("./routes/CustomerAddress.Routes");
const CustomerCardRoutes = require("./routes/CustomerCard.routes");
const EventTypeRoutes = require("./routes/EventType.routes");
const TicketTypeRoutes = require("./routes/TicketType.routes");
const TicketRoutes = require("./routes/Ticket.routes");
const PaymentRoutes = require("./routes/Payment.Routes");
const FlatRoutes = require("./routes/Flat.routes");
const DiscountRoutes = require("./routes/Discount.routes");
const DeliveryRoutes = require("./routes/Delivery.routes");
const StatusRoutes = require("./routes/Status.Routes");
const HumanCategoryRoutes = require("./routes/HumanCategory.routes");
const GenderRoutes = require("./routes/Gender.routes");
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", AdminRoutes);
app.use("/api", BookingRoutes);
app.use("/api", CartRoutes);
app.use("/api", CartItemRoutes);
app.use("/api", venueTypeRoutes);
app.use("/api", Venue_VenueRoutes);
app.use("/api", RegionRoutes);
app.use("/api", LangRoutes);
app.use("/api", DistrictRoutes);
app.use("/api", SeatRoutes);
app.use("/api", SeatTypeRoutes);
app.use("/api", SectorRoutes);
app.use("/api", DiscountRoutes);
app.use("/api", StatusRoutes);
app.use("/api", DeliveryRoutes);
app.use("/api", HumanCategoryRoutes);
app.use("/api", GenderRoutes);
app.use("/api", venuePhoto);
app.use("/api", venueRoutes);
app.use("/api", EventRoutes);
app.use("/api", CountryRoutes);
app.use("/api", CustomerRoutes);
app.use("/api", CustomerAddressRoutes);
app.use("/api", CustomerCardRoutes);
app.use("/api", EventTypeRoutes);
app.use("/api", TicketTypeRoutes);
app.use("/api", TicketRoutes);
app.use("/api", PaymentRoutes);
app.use("/api", FlatRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
  });
});
