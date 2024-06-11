import {
  PipelineType,
  pipeline,
  Pipeline,
  TextClassificationPipeline,
} from "@xenova/transformers";

const P = () =>
  class PipelineSingleton {
    static model = "Xenova/distilbert-base-uncased-finetuned-sst-2-english";
    static instance: Promise<TextClassificationPipeline> | null = null;

    static async getInstance(progress_callback = () => {}) {
      if (this.instance === null) {
        this.instance = pipeline("text-classification", this.model, {
          progress_callback,
        });
      }
      return this.instance;
    }
  };

let PipelineSingleton: ReturnType<typeof P>;
if (process.env.NODE_ENV !== "production") {
  if (!(global as any).PipelineSingleton) {
    (global as any).PipelineSingleton = P();
  }
  PipelineSingleton = (global as any).PipelineSingleton;
} else {
  PipelineSingleton = P();
}
export default PipelineSingleton;
