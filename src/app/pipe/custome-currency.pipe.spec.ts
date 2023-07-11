import { CustomeCurrencyPipe } from './custome-currency.pipe';

describe('CustomeCurrencyPipe', () => {
  let pipe = new CustomeCurrencyPipe();
  beforeEach(() => {
    pipe = new CustomeCurrencyPipe();
  })
  it('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });

  it('should pipe work', () => {
    expect(pipe.transform(1234, 'INR')).toEqual('₹1,234');
    expect(pipe.transform(1234, 'USD')).toEqual('$1,234');
    expect(pipe.transform(1234, '')).toEqual(1234);
  })
});
