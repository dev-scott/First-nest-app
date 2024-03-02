import { Injectable } from '@nestjs/common';

@Injectable()
export class SumServiceService {
  getsum(a, b) {
    return Number(a) + Number(b);
  }
}
