import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  prompt: {
    type: String,
    required: [true, "Prompt is Required"],
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  tag: {
    type: String,
    required: [true, "Tag is Required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
