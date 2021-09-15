import Shop from "@/views/Shop.vue";
import { shallowMount } from "@vue/test-utils";
import { enableFetchMocks } from "jest-fetch-mock";
import Header from "@/components/Header.vue";
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

  it("should find imported component", () => {
    const wrapper = shallowMount(Shop);
    const header = wrapper.findComponent(Header);
    expect(header.exists()).toBe(true);
    console.log(header);
  });

  it("triggers add product method on click", async () => {
    const Method = jest.spyOn(Shop.methods, "addToCart");
    const wrapper = shallowMount(Shop);
    await wrapper.find("button.buttonAdd").trigger("click");
    expect(Method).toBeCalled();
  });

  it("triggers remove product method on click", async () => {
    const Method = jest.spyOn(Shop.methods, "removeFromCart");
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

    await wrapper.find("button.buttonRemove").trigger("click");
    expect(Method).toBeCalled();
  });

  it("should show items in cart", () => {
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
    const product = wrapper.findAll("div.cartProduct").length;
    expect(product).toBe(1);
  });

  it("should check that cart is rendered", async () => {
    const wrapper = shallowMount(Shop, {
      data() {
        return {
          cart: [],
        };
      },
    });
    const cart = wrapper.findAll("div.cartProduct");
    expect(cart).toBeTruthy();
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
