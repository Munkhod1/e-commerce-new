import { model, Schema } from "mongoose";
// new gedgiin tsaana bguulagch function bgaa
interface IUser {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  phoneNumber: String;
  role: String;
  created_at: Date;
  profile_img: ImageBitmap;
  first_name: String;
  last_name: String;
  address: String;

  //object id bichne mongoose. yg ene interface-iin daguu schema deer bichne. interface zuvhun typeiig n bichij haruulna. schema n mongoose deer ymar object baihiig bichij ugnu
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    require: [true, "Хэрэглэгчийн нэрийг заавал оруулна"],

    //baih yostoi gedgiig shalgaj baigaa delgeruulj shalgah bol [] ashiglej ugnu
  },
  first_name: {
    type: String,
    require: [true, "Хэрэглэгчийн нэрийг заавал оруулна"],

    //baih yostoi gedgiig shalgaj baigaa delgeruulj shalgah bol [] ashiglej ugnu
  },
  last_name: {
    type: String,
    require: [true, "Хэрэглэгчийн нэрийг заавал оруулна"],

    //baih yostoi gedgiig shalgaj baigaa delgeruulj shalgah bol [] ashiglej ugnu
  },
  email: {
    type: String,
    unique: true,
    require: [true, "Хэрэглэгчийн email заавал оруулна"],
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    minLenght: [8, "Хэрэглэгчийн нууц үг багадаа 8 тэмдэгт байна"], //hamgiin bagadaa urt hed baihiig helne
    require: [true, "Хэрэглэгчийн password заавал оруулна"],
  },
  phoneNumber: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },

  profile_img: {},
});

const User = model("User", userSchema); //mongoose-s model ugnu. Modeliin ner n User.
export default User;
