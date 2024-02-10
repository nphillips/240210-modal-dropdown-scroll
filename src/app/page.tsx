'use client';
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import Field from '@/components/Field';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import Radio from '@/components/Radio';
import RadioGroup from '@/components/RadioGroup';
import React from 'react';
import Select from 'react-select';

const options = [
  { id: 'val0', value: 'val0', label: 'testsite5' },
  { id: 'val0', value: 'val0', label: 'goofy testing site' },
  { id: 'val0', value: 'val0', label: 'sitename-1791234098' },
  { id: 'val0', value: 'val0', label: 'sitename1283343488' },
  { id: 'val0', value: 'val0', label: 'Testing111' },
  { id: 'val0', value: 'val0', label: 'TYLER TEST' },
  { id: 'val0', value: 'val0', label: 'An Amazing Site' },
  { id: 'val0', value: 'val0', label: 'test for kate' },
  { id: 'val0', value: 'val0', label: 'Site With Sensor Mapping' },
  { id: 'val0', value: 'val0', label: 'Testing1' },
  { id: 'val0', value: 'val0', label: 'Yet Another Site' },
  { id: 'val0', value: 'val0', label: 'Viras test site' },
];

const MyComponent = () => <Select options={options} />;

export default function Home() {
  return (
    <div>
      <Modal
        innerStyle="" // I'd like to add conditional padding here
        heading="Invite a user"
        headingSize="h3"
        description="Start by selecting the level of permission for this user"
        open={true}
        onClose={() => {}}
        maxWidth="lg"
        buttons={
          <>
            <Button size="medium" variant="secondary" label="Cancel" />
            <Button size="medium" variant="primary" label="Delete" iconRight />
          </>
        }
      >
        <>
          <RadioGroup
            name="permission"
            value=""
            onChange={() => {}}
            direction="horizontal"
            className="border-b border-b-[#C1DBEA] pb-6 leading-[1.25] [&_label]:text-[.875rem]"
          >
            <Radio
              id="orgOption"
              value="org-admin"
              label="Org admin"
              className="[&>span]:font-medium"
              aria-selected="true"
            />
            <Radio id="siteOption" value="site-admin" label="Site admin" />
            <Radio
              id="externalOption"
              value="site-external"
              label="External collaborator"
            />
          </RadioGroup>

          <div className="mt-8 flex min-w-0 ">
            <div className="flex min-w-0 flex-[1_1_500px] flex-col gap-y-8 pb-5">
              <Field htmlFor="inviteEmail" label="Email">
                <form noValidate>
                  <Input
                    id="inviteEmail"
                    value=""
                    inputSize="large"
                    name="inviteEmail"
                    placeholder="Enter new user email"
                    required
                    type="text"
                    classes="w-full"
                  />
                </form>
              </Field>

              <Field htmlFor="sites" label="Sites">
                <form noValidate>
                  <Dropdown
                    options={options}
                    placeholder="Select one from the list"
                    inputId="example0294"
                    handleSelection={() => {}}
                    size="large"
                    isMulti
                    menuLayoutEffect={true}
                  />
                </form>
              </Field>
            </div>
            <div className="flex w-full min-w-0 flex-[1_1_375px] flex-col"></div>
          </div>
        </>
      </Modal>
    </div>
  );
}
