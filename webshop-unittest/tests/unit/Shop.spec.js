import Shop from "@/views/Shop.vue";
import { shallowMount } from "@vue/test-utils";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

describe("Shop.vue", () => {
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
  it("should fetch from api", () => {
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

  it("triggers method on click", async () => {
    const Method = jest.spyOn(Shop.methods, "addToCart");
    const wrapper = shallowMount(Shop);
    await wrapper.find("button.buttonAdd").trigger("click");
    expect(Method).toBeCalled();
  });

  it("should remove item from cart", async () => {
    const wrapper = shallowMount(Shop, {
      data() {
        return {
          cart: [
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
    const Cart = await wrapper.find("button.buttonRemove").trigger("click");
    const CartAll = wrapper.findAll("div.product").length;

    expect(CartAll).toBe(1);
    expect(Cart).not.toEqual(1);
  });
});

/*describe(" increase decrease button", () => {
  it("should display value 1 when rendered", () => {
    const wrapper = shallowMount(Shop);
    const expected = 0;
    const resultElem = wrapper.find("#result");
    const value = resultElem.text();

    expect(Number(value)).toBe(expected);
    /* const wrapper = shallowMount(Shop, {
        data() {
          return {
            number: 1,
          };
        },
      });
      //const expected = 1;
      const totalQuantity = wrapper.find("#total");
      const value = totalQuantity.text();

      expect(Number(value)).toBe(1);
  });
}); */
