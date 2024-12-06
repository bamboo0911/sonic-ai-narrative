import * as functions from "firebase-functions";

interface CounterResponse {
  result: number;
  message: string;
  timestamp: string;
}

export const incrementCounter = functions.https.onRequest(
  (request, response) => {
    // 設置 CORS 標頭，允許本地開發環境的請求
    response.set("Access-Control-Allow-Origin", "*");

    // 從請求中獲取當前的計數值
    const currentNumber = Number(request.query.current) || 0;

    // 計算新的數字
    const newNumber = currentNumber + 1;

    // 準備回應資料
    const responseData: CounterResponse = {
      result: newNumber,
      message: `成功將數字從 ${currentNumber} 增加到 ${newNumber}`,
      timestamp: new Date().toISOString(),
    };

    // 回傳結果
    response.json(responseData);
  },
);
