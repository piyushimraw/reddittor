import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Sentiment Analysis</h1>
        <div className="flex-1 max-w-md">
          <Input
            className="w-full"
            placeholder="Search tweets by keyword or hashtag"
            type="search"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Overall Sentiment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-green-500">
                  %{"\n                              "}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Positive
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-red-500">
                  %{"\n                              "}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Negative
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-gray-500 dark:text-gray-400">
                  %{"\n                              "}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Neutral
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Tweets</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4" />
        </Card>
      </div>
    </div>
  );
}
