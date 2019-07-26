declare namespace controller {
  // 接口返回数据字段
  export interface ResBody {
    // status: number;
    error_code: number,
    data: any;
    msg: string;
  }
}

export = controller;
