// end holboltoo hiine
import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
  // odoo holboltoo mongoose dotroos avna od:123456# gej passaa oruulna
  //   await mongoose.connect(
  //     "mongodb+srv://od:123456#@ecommerce-fullstack.92vtz.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-fullstack"
  //   );
  console.log("Database connected");
  try {
    const con = await mongoose.connect(uri);
    console.log("Database connected", con.connection.host);
  } catch (error) {
    console.log("Database cannot connected", error);
  }
};
