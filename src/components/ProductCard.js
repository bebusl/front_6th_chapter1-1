// components/ProductCard.js
export function ProductCard({ id, title, image, lprice, brand }) {
  return `
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
           data-product-id="${id}">
        <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
          <img src="${image}" alt="${title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-200" loading="lazy">
        </div>
        <div class="p-3">
          <div class="cursor-pointer product-info mb-3">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${title}</h3>
            <p class="text-xs text-gray-500 mb-2">${brand || ""}</p>
            <p class="text-lg font-bold text-gray-900">${lprice}원</p>
          </div>
          <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${id}">
            장바구니 담기
          </button>
        </div>
      </div>
    `;
}
export const ProductCardSkeleton = `<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                <div class="aspect-square bg-gray-200"></div>
                <div class="p-3">
                  <div class="h-4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div class="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>`;
