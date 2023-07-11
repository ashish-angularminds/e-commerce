import { DescriptionPipe } from './description.pipe';

describe('DescriptionPipe', () => {
  let pipe = new DescriptionPipe();

  beforeEach(() => {
    pipe = new DescriptionPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should pipe work', () => {
    expect(pipe.transform('Loosdiofsdfdsnfjdnfjisdnsjfsnfjksdnfjsd','title')).toEqual('Loosdiofsdfdsnfjdnfjisdnsjfsnfj...')
    expect(pipe.transform('abc', 'title')).toEqual('abc');
    expect(pipe.transform('abc', '')).toEqual('abc');
    
    let a = 'A character can be any letter, number, punctuation, special character, or space. Each of these A character can be any letter';
    let b = '<div class="fw-normal lh-1 border-0 text-decoration-none m-0 p-0 ts">A character can be any letter, number, punctuation, special character, or space. Each of these A character can be any let<b class="fs-2 fw-bolder lh-0">...</b></div>';
    expect(pipe.transform(a, '')).toEqual(b);
    a = 'A character can be any letter, number, punctuation, special character, or space. Each of these';
    b = '<div class="fw-normal lh-1 border-0 text-decoration-none m-0 p-0 ts">A character can be any letter, number, punctuation, special character, or space. <b class="fs-2 fw-bolder lh-0">...</b></div>';
    expect(pipe.transform(a, '')).toEqual(b);
    a = 'A character can be any letter, number, punctuation, special';
    b = '<div class="fw-normal lh-1 border-0 text-decoration-none m-0 p-0 ts">A character can be any letter, number, pu<b class="fs-2 fw-bolder lh-0">...</b></div>';
    expect(pipe.transform(a, '')).toEqual(b);
  })
});
