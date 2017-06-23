class AddSpecsToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :tech, :string
    add_column :projects, :hero_4, :string
    add_column :projects, :end_date, :date
    add_column :projects, :logo, :string
    add_column :projects, :image_1, :string
    add_column :projects, :image_2, :string
    add_column :projects, :image_3, :string
    add_column :projects, :image_4, :string
  end
end
