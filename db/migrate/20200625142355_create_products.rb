class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products, id: :uuid do |t|
      t.string :title
      t.string :featured_image
      t.json :image_gallery
      t.bigint :price, default: 0
      t.string :category
      t.string :sub_category
      t.integer :condition, default: 0
      t.integer :selling_option, default: 0
      t.integer :shipping_option, default: 0
      t.text :description
      t.string :user_id

      t.timestamps
    end
  end
end
