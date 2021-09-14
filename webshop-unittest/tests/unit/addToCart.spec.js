import Shop from "@/views/Shop.vue";
import { shallowMount } from "@vue/test-utils";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

describe(" addToCart", () => {
  //let wrapper;
  beforeEach(() => {
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: { rate: 3.9, count: 120 },
      })
    );
  });
  it("should fetch", () => {
    const spy = jest.spyOn(Shop.methods, "init");
    shallowMount(Shop);

    expect(spy).toBeCalled();
  });

  it("should show products", () => {
    const wrapper = shallowMount(Shop, {
      data() {
        return {
          products: [
            {
              id: 1,
              title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
              price: 109.95,
              description:
                "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
              category: "men's clothing",
              image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              rating: { rate: 3.9, count: 120 },
            },
          ],
        };
      },
    });
    const product = wrapper.findAll("div.product").length;
    expect(product).toBe(1);
  });

  /*
  it("add to cart on click", async () => {
    const button = wrapper.toBe('button')
    //await button.trigger("click");
    expect(button).toBe(true);
  });*/
});

/*
describe(" addToCart", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Shop);
    enableFetchMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: { rate: 3.9, count: 120 },
      })
    );
    });

  it("add to cart on click", async () => {
    const button = wrapper.find('button');
    await button.trigger("click");
    const calls = fetch.mock.calls.length;
    expect(calls).toEqual(1);
  });
});*/
