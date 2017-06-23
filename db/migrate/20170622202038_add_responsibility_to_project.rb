class AddResponsibilityToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :responsibility, :text
  end
end
