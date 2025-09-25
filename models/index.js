const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const VenueType = require("./venue.type.model")(sequelize, Sequelize);
const Region = require("./region.model")(sequelize, Sequelize);
const District = require("./district.model")(sequelize, Sequelize);
const VenueModel = require("./venue.model")(sequelize, Sequelize);
const VenueVenueType = require("./venue_venuetype.model")(sequelize, Sequelize);
const Admin = require("./admin.model")(sequelize, Sequelize);
const Seat_type = require("./seat.type.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const VenuePhoto = require("./venue.photo.model")(sequelize, Sequelize);
const CustomerCard = require("./customer.card.model")(sequelize, Sequelize);
const CustomerAddress = require("./customer.address.model")(
  sequelize,
  Sequelize
);
const Customer = require("./customer.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Payment = require("./payment.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const TicketType = require("./ticket.type.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Lang = require("./lenguage.model")(sequelize, Sequelize);
const Event = require("./event.model")(sequelize, Sequelize);
const EventType = require("./event.type.model")(sequelize, Sequelize);
const HumanCategory = require("./human.category.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);
const Delivery = require("./delivery.model")(sequelize, Sequelize);
const CartItem = require("./cart_item.model")(sequelize, Sequelize);
const Cart = require("./card.model")(sequelize, Sequelize);

VenueType.associate(sequelize.models);
Event.associate(sequelize.models);
EventType.associate(sequelize.models);
Region.associate(sequelize.models);
District.associate(sequelize.models);
VenueModel.associate(sequelize.models);
VenueVenueType.associate(sequelize.models);
Seat_type.associate(sequelize.models);
Seat.associate(sequelize.models);
Sector.associate(sequelize.models);
VenuePhoto.associate(sequelize.models);
CustomerCard.associate(sequelize.models);
CustomerAddress.associate(sequelize.models);
Customer.associate(sequelize.models);
Country.associate(sequelize.models);
Booking.associate(sequelize.models);
Payment.associate(sequelize.models);
Ticket.associate(sequelize.models);
TicketType.associate(sequelize.models);
Status.associate(sequelize.models);
Gender.associate(sequelize.models);
HumanCategory.associate(sequelize.models);
Flat.associate(sequelize.models);
Discount.associate(sequelize.models);
Delivery.associate(sequelize.models);
CartItem.associate(sequelize.models);
Cart.associate(sequelize.models);
Lang.associate(sequelize.models);

module.exports = {
  VenueType,
  Event,
  EventType,
  Booking,
  Payment,
  Ticket,
  TicketType,
  Status,
  Gender,
  HumanCategory,
  Flat,
  Discount,
  Delivery,
  Cart,
  CartItem,
  Region,
  Lang,
  District,
  VenueModel,
  VenueVenueType,
  Admin,
  Seat_type,
  Seat,
  VenuePhoto,
  Sector,
  Customer,
  CustomerAddress,
  CustomerCard,
  Country,
  sequelize,
};
